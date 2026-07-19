import { useEffect, useRef } from "react";

import { getRandomInRange } from "../utils/getRandomInRange";

const WIDTH = 850;
const HEIGHT = 600;

interface Vector2 {
  x: number;
  y: number;
}

interface Ball {
  radius: number;
  position: Vector2;
  velocity: Vector2;
}

function generateBall(): Ball {
  return {
    radius: getRandomInRange(25, 50),
    position: {
      x: getRandomInRange(0, WIDTH),
      y: getRandomInRange(0, HEIGHT),
    },
    velocity: {
      x: getRandomInRange(0.4, 0.8),
      y: getRandomInRange(0.4, 0.8),
    },
  };
}

function resolveCollision(first: Ball, second: Ball) {
  const dx = first.position.x - second.position.x;
  const dy = first.position.y - second.position.y;
  const distance = Math.hypot(dx, dy);
  const overlap = first.radius + second.radius - distance;

  if (overlap <= 0 || distance === 0) return;

  const normal = { x: dx / distance, y: dy / distance };
  const correction = overlap / 2;

  first.position.x += normal.x * correction;
  first.position.y += normal.y * correction;
  second.position.x -= normal.x * correction;
  second.position.y -= normal.y * correction;

  const firstNormalVelocity =
    first.velocity.x * normal.x + first.velocity.y * normal.y;
  const secondNormalVelocity =
    second.velocity.x * normal.x + second.velocity.y * normal.y;
  const totalMass = first.radius + second.radius;

  const firstVelocityAfter =
    (firstNormalVelocity * (first.radius - second.radius) +
      2 * second.radius * secondNormalVelocity) /
    totalMass;
  const secondVelocityAfter =
    (secondNormalVelocity * (second.radius - first.radius) +
      2 * first.radius * firstNormalVelocity) /
    totalMass;

  first.velocity.x += (firstVelocityAfter - firstNormalVelocity) * normal.x;
  first.velocity.y += (firstVelocityAfter - firstNormalVelocity) * normal.y;
  second.velocity.x += (secondVelocityAfter - secondNormalVelocity) * normal.x;
  second.velocity.y += (secondVelocityAfter - secondNormalVelocity) * normal.y;
}

function CanvasBalls() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;

    const balls = Array.from({ length: 10 }, generateBall);
    let animationFrame = 0;

    const animate = () => {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      context.fillStyle = "rgb(0, 0, 0)";

      for (const ball of balls) {
        context.beginPath();
        context.arc(
          ball.position.x,
          ball.position.y,
          ball.radius,
          0,
          Math.PI * 2,
        );
        context.fill();

        ball.position.x += ball.velocity.x;
        ball.position.y += ball.velocity.y;

        if (
          ball.position.x < ball.radius / 2 ||
          ball.position.x > WIDTH - ball.radius / 2
        ) {
          ball.velocity.x *= -1;
        }

        if (
          ball.position.y < ball.radius / 2 ||
          ball.position.y > HEIGHT - ball.radius / 2
        ) {
          ball.velocity.y *= -1;
        }
      }

      for (let first = 0; first < balls.length; first += 1) {
        for (let second = first + 1; second < balls.length; second += 1) {
          resolveCollision(balls[first], balls[second]);
        }
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />;
}

export default CanvasBalls;
