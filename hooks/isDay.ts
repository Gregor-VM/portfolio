import {useMemo} from 'react';

export default function isDay() {
    const hour = useMemo(() => (new Date().getHours()), []);
    return (hour < 6 || hour > 18) ? false : true;
}
