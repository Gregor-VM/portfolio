import React, { useEffect, useRef } from 'react'
import { getRandomInRange } from '../utils/getRandomInRange';

const WIDTH = 850;
const HEIGHT = 600;

const generateBall = () => {
    return ({
        radius: getRandomInRange(25, 50),
        position: {x: getRandomInRange(0, WIDTH), y: getRandomInRange(0, HEIGHT)},
        velocity: {x: getRandomInRange(.40, .80), y: getRandomInRange(.40, .80)}
    })
}

const balls = Array.from({length: 10}).map(_ => {
    return generateBall();
})

function CanvasBalls() {

    const requestRef = React.useRef<number>()
    const canvasRef = useRef<HTMLCanvasElement>();

    const animate = (time: number) => {
        // The 'state' will always be the initial value here

        const ctx = (canvasRef.current.getContext("2d") as CanvasRenderingContext2D);

        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        const loss = 1;

        balls.forEach(ball => {
            ctx.fillStyle = `rgb(0, 0, 0)`;
            ctx.beginPath();
            ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI * 2);
            ctx.fill();
        })

        balls.forEach(ball => {
            ball.position.x += ball.velocity.x;
            ball.position.y += ball.velocity.y;

            if(ball.position.x < (ball.radius / 2) || ball.position.x > (WIDTH - ball.radius / 2) ){
                ball.velocity.x = -ball.velocity.x;
            }

            if(ball.position.y < (ball.radius / 2) || ball.position.y > (HEIGHT - ball.radius / 2) ){
                ball.velocity.y = -ball.velocity.y;
            }
        });

        balls.forEach(ball => {

            balls.forEach(innerBall => {
                const dx = ball.position.x - innerBall.position.x;
                const dy = ball.position.y - innerBall.position.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const overlap = (ball.radius + innerBall.radius) - distance;
                if(overlap > 0){
                    if(ball != innerBall){

                        const normal = { x: dx / distance, y: dy / distance };

                        // overlap handling
                        ball.position.x += normal.x * (overlap / 2);
                        ball.position.y += normal.y * (overlap / 2);
                        innerBall.position.x -= normal.x * (overlap / 2);
                        innerBall.position.y -= normal.y * (overlap / 2);

                        // collision velocities calculations
                        const ballMass = ball.radius;
                        const innerBallMass = innerBall.radius;

                        const v1n = ball.velocity.x * normal.x + ball.velocity.y * normal.y;
                        const v2n = innerBall.velocity.x * normal.x + innerBall.velocity.y * normal.y;

                        const v1nAfter = (v1n * (ballMass - innerBallMass) + 2 * innerBallMass * v2n) / (ballMass + innerBallMass);
                        const v2nAfter = (v2n * (innerBallMass - ballMass) + 2 * ballMass * v1n) / (ballMass + innerBallMass);
                        
                        ball.velocity.x = v1nAfter * normal.x + (ball.velocity.x - v1n * normal.x);
                        ball.velocity.y = v1nAfter * normal.y + (ball.velocity.y - v1n * normal.y);
                        
                        innerBall.velocity.x = v2nAfter * normal.x + (innerBall.velocity.x - v2n * normal.x);
                        innerBall.velocity.y = v2nAfter * normal.y + (innerBall.velocity.y - v2n * normal.y);
                        

                        ball.velocity.x *= loss;
                        ball.velocity.y *= loss;

                        innerBall.velocity.x *= loss;
                        innerBall.velocity.y *= loss;
                    }
                }
            })
            
        })

        requestRef.current = requestAnimationFrame(animate);
      }

    useEffect(() => {

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);

    }, []);

    return (
        <canvas ref={canvasRef} width={`${WIDTH}px`} height={`${HEIGHT}px`}></canvas>
    );
}

export default CanvasBalls