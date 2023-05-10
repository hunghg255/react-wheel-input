import './App.css';

import * as React from 'react';
import { GithubCorners } from 'react-gh-corners';

// https://rauno.me/craft/wheel-input

/**
 https://gizma.com/easing/#l
t is current time
b is start value
c is change in value
d is duration
 */

function linear(t: number, b: number, c: number, d: number) {
  t /= d / 2;
  if (t < 1) {
    return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
  }
  t -= 2;
  return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
}

const scrollToElement = (element: any, currentPos: any, newPos: any) => {
  const elementPosition = newPos;
  const startPosition = currentPos;

  let startTime = 0;
  const duration = 400;

  function animate(currentTime: number) {
    if (!startTime) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;

    const run = linear(timeElapsed, startPosition, elementPosition, duration);

    element.style.setProperty('--d', `${timeElapsed < duration ? run : Math.round(run)}`);

    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
};

export default function App() {
  const refMonth: any = React.useRef<HTMLUListElement>();
  const refYear: any = React.useRef<HTMLUListElement>();
  const refDay: any = React.useRef<HTMLUListElement>();

  React.useEffect(() => {
    const scrollMonth = (e: { deltaY: number }) => {
      const currentPos = Number(refMonth.current.style.getPropertyValue('--d'));
      const newPos = e.deltaY / 4;

      scrollToElement(refMonth.current, currentPos, newPos);
    };

    const scrollYear = (e: { deltaY: number }) => {
      const currentPos = Number(refYear.current.style.getPropertyValue('--d'));
      const newPos = e.deltaY / 4 > 0 ? e.deltaY / 4 - 1 : e.deltaY / 4 + 1;

      scrollToElement(refYear.current, currentPos, newPos);
    };
    const scrollDay = (e: { deltaY: number }) => {
      const currentPos = Number(refDay.current.style.getPropertyValue('--d'));
      const newPos = e.deltaY / 4;

      scrollToElement(refDay.current, currentPos, newPos);
    };

    refMonth.current.addEventListener(
      'mouseenter',
      () => {
        document.addEventListener('wheel', scrollMonth);
      },
      { passive: false },
    );

    refMonth.current.addEventListener(
      'mouseleave',
      () => {
        document.removeEventListener('wheel', scrollMonth);
      },
      { passive: false },
    );

    refYear.current.addEventListener(
      'mouseenter',
      () => {
        document.addEventListener('wheel', scrollYear);
      },
      { passive: false },
    );

    refYear.current.addEventListener(
      'mouseleave',
      () => {
        document.removeEventListener('wheel', scrollYear);
      },
      { passive: false },
    );

    refDay.current.addEventListener(
      'mouseenter',
      () => {
        document.addEventListener('wheel', scrollDay);
      },
      { passive: false },
    );

    refDay.current.addEventListener(
      'mouseleave',
      () => {
        document.removeEventListener('wheel', scrollDay);
      },
      { passive: false },
    );
  }, []);

  return (
    <div className='app'>
      <h1>React Wheel Input</h1>
      <div className='c-lesPJm c-lesPJm-icPJcjt-css' data-stage>
        <div className='c-ehGmTy c-ehGmTy-cKKBXI-variant-top' />
        <div className='c-ehGmTy c-ehGmTy-cdssfv-variant-bottom' />
        <div className='c-lesPJm c-lesPJm-icCoDYT-css'>
          <div className='c-lesPJm c-lesPJm-ibAOMyz-css' />
          <div className='c-lesPJm c-lesPJm-igHcswA-css'>
            <ul
              style={{ '--d': 0, '--r': -10 } as React.CSSProperties}
              className='c-lesPJm c-lesPJm-ifEVQUB-css'
              ref={refMonth}
            >
              <li
                style={{ '--idx': 0 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                January
              </li>
              <li
                style={{ '--idx': 1 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                February
              </li>
              <li
                style={{ '--idx': 2 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                March
              </li>
              <li
                style={{ '--idx': 3 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                April
              </li>
              <li
                style={{ '--idx': 4 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                May
              </li>
              <li
                style={{ '--idx': 5 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                June
              </li>
              <li
                style={{ '--idx': 6 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                July
              </li>
              <li
                style={{ '--idx': 7 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                August
              </li>
              <li
                style={{ '--idx': 8 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                September
              </li>
              <li
                style={{ '--idx': 9 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                October
              </li>
              <li
                style={{ '--idx': 10 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                November
              </li>
              <li
                style={{ '--idx': 11 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                December
              </li>
              <li
                style={{ '--idx': 12 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                January
              </li>
              <li
                style={{ '--idx': 13 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                February
              </li>
              <li
                style={{ '--idx': 14 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                March
              </li>
              <li
                style={{ '--idx': 15 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                April
              </li>
              <li
                style={{ '--idx': 16 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                May
              </li>
              <li
                style={{ '--idx': 17 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                June
              </li>
              <li
                style={{ '--idx': 18 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                July
              </li>
              <li
                style={{ '--idx': 19 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                August
              </li>
              <li
                style={{ '--idx': 20 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                September
              </li>
              <li
                style={{ '--idx': 21 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                October
              </li>
              <li
                style={{ '--idx': 22 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                November
              </li>
              <li
                style={{ '--idx': 23 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                December
              </li>
              <li
                style={{ '--idx': 24 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                January
              </li>
              <li
                style={{ '--idx': 25 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                February
              </li>
              <li
                style={{ '--idx': 26 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                March
              </li>
              <li
                style={{ '--idx': 27 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                April
              </li>
              <li
                style={{ '--idx': 28 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                May
              </li>
              <li
                style={{ '--idx': 29 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                June
              </li>
              <li
                style={{ '--idx': 30 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                July
              </li>
              <li
                style={{ '--idx': 31 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                August
              </li>
              <li
                style={{ '--idx': 32 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                September
              </li>
              <li
                style={{ '--idx': 33 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                October
              </li>
              <li
                style={{ '--idx': 34 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                November
              </li>
              <li
                style={{ '--idx': 35 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                December
              </li>
            </ul>
            <ul
              style={{ '--d': 0, '--r': -10 } as React.CSSProperties}
              className='c-lesPJm c-lesPJm-ifEVQUB-css'
              ref={refYear}
            >
              <li
                style={{ '--idx': 0 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2023
              </li>
              <li
                style={{ '--idx': 1 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2022
              </li>
              <li
                style={{ '--idx': 2 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2021
              </li>
              <li
                style={{ '--idx': 3 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2020
              </li>
              <li
                style={{ '--idx': 4 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2019
              </li>
              <li
                style={{ '--idx': 5 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2018
              </li>
              <li
                style={{ '--idx': 6 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2017
              </li>
              <li
                style={{ '--idx': 7 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2016
              </li>
              <li
                style={{ '--idx': 8 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2015
              </li>
              <li
                style={{ '--idx': 9 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2014
              </li>
              <li
                style={{ '--idx': 10 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2013
              </li>
              <li
                style={{ '--idx': 11 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2012
              </li>
              <li
                style={{ '--idx': 12 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2023
              </li>
              <li
                style={{ '--idx': 13 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2022
              </li>
              <li
                style={{ '--idx': 14 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2021
              </li>
              <li
                style={{ '--idx': 15 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2020
              </li>
              <li
                style={{ '--idx': 16 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2019
              </li>
              <li
                style={{ '--idx': 17 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2018
              </li>
              <li
                style={{ '--idx': 18 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2017
              </li>
              <li
                style={{ '--idx': 19 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2016
              </li>
              <li
                style={{ '--idx': 20 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2015
              </li>
              <li
                style={{ '--idx': 21 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2014
              </li>
              <li
                style={{ '--idx': 22 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2013
              </li>
              <li
                style={{ '--idx': 23 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2012
              </li>
              <li
                style={{ '--idx': 24 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2023
              </li>
              <li
                style={{ '--idx': 25 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2022
              </li>
              <li
                style={{ '--idx': 26 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2021
              </li>
              <li
                style={{ '--idx': 27 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2020
              </li>
              <li
                style={{ '--idx': 28 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2019
              </li>
              <li
                style={{ '--idx': 29 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2018
              </li>
              <li
                style={{ '--idx': 30 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2017
              </li>
              <li
                style={{ '--idx': 31 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2016
              </li>
              <li
                style={{ '--idx': 32 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2015
              </li>
              <li
                style={{ '--idx': 33 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2014
              </li>
              <li
                style={{ '--idx': 34 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2013
              </li>
              <li
                style={{ '--idx': 35 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2012
              </li>
            </ul>
            <ul
              style={{ '--d': 0, '--r': -10 } as React.CSSProperties}
              className='c-lesPJm c-lesPJm-ifEVQUB-css'
              ref={refDay}
            >
              <li
                style={{ '--idx': 0 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                1
              </li>
              <li
                style={{ '--idx': 1 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2
              </li>
              <li
                style={{ '--idx': 2 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                3
              </li>
              <li
                style={{ '--idx': 3 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                4
              </li>
              <li
                style={{ '--idx': 4 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                5
              </li>
              <li
                style={{ '--idx': 5 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                6
              </li>
              <li
                style={{ '--idx': 6 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                7
              </li>
              <li
                style={{ '--idx': 7 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                8
              </li>
              <li
                style={{ '--idx': 8 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                9
              </li>
              <li
                style={{ '--idx': 9 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                10
              </li>
              <li
                style={{ '--idx': 10 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                11
              </li>
              <li
                style={{ '--idx': 11 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                12
              </li>
              <li
                style={{ '--idx': 12 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                13
              </li>
              <li
                style={{ '--idx': 13 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                14
              </li>
              <li
                style={{ '--idx': 14 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                15
              </li>
              <li
                style={{ '--idx': 15 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                16
              </li>
              <li
                style={{ '--idx': 16 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                17
              </li>
              <li
                style={{ '--idx': 17 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                18
              </li>
              <li
                style={{ '--idx': 18 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                19
              </li>
              <li
                style={{ '--idx': 19 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                20
              </li>
              <li
                style={{ '--idx': 20 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                21
              </li>
              <li
                style={{ '--idx': 21 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                22
              </li>
              <li
                style={{ '--idx': 22 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                23
              </li>
              <li
                style={{ '--idx': 23 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                24
              </li>
              <li
                style={{ '--idx': 24 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                25
              </li>
              <li
                style={{ '--idx': 25 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                26
              </li>
              <li
                style={{ '--idx': 26 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                27
              </li>
              <li
                style={{ '--idx': 27 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                28
              </li>
              <li
                style={{ '--idx': 28 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                29
              </li>
              <li
                style={{ '--idx': 29 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                30
              </li>
              <li
                style={{ '--idx': 30 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                1
              </li>
              <li
                style={{ '--idx': 31 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2
              </li>
              <li
                style={{ '--idx': 32 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                3
              </li>
              <li
                style={{ '--idx': 33 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                4
              </li>
              <li
                style={{ '--idx': 34 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                5
              </li>
              <li
                style={{ '--idx': 35 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                6
              </li>
              <li
                style={{ '--idx': 36 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                7
              </li>
              <li
                style={{ '--idx': 37 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                8
              </li>
              <li
                style={{ '--idx': 38 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                9
              </li>
              <li
                style={{ '--idx': 39 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                10
              </li>
              <li
                style={{ '--idx': 40 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                11
              </li>
              <li
                style={{ '--idx': 41 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                12
              </li>
              <li
                style={{ '--idx': 42 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                13
              </li>
              <li
                style={{ '--idx': 43 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                14
              </li>
              <li
                style={{ '--idx': 44 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                15
              </li>
              <li
                style={{ '--idx': 45 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                16
              </li>
              <li
                style={{ '--idx': 46 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                17
              </li>
              <li
                style={{ '--idx': 47 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                18
              </li>
              <li
                style={{ '--idx': 48 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                19
              </li>
              <li
                style={{ '--idx': 49 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                20
              </li>
              <li
                style={{ '--idx': 50 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                21
              </li>
              <li
                style={{ '--idx': 51 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                22
              </li>
              <li
                style={{ '--idx': 52 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                23
              </li>
              <li
                style={{ '--idx': 53 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                24
              </li>
              <li
                style={{ '--idx': 54 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                25
              </li>
              <li
                style={{ '--idx': 55 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                26
              </li>
              <li
                style={{ '--idx': 56 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                27
              </li>
              <li
                style={{ '--idx': 57 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                28
              </li>
              <li
                style={{ '--idx': 58 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                29
              </li>
              <li
                style={{ '--idx': 59 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                30
              </li>
              <li
                style={{ '--idx': 60 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                1
              </li>
              <li
                style={{ '--idx': 61 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                2
              </li>
              <li
                style={{ '--idx': 62 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                3
              </li>
              <li
                style={{ '--idx': 63 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                4
              </li>
              <li
                style={{ '--idx': 64 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                5
              </li>
              <li
                style={{ '--idx': 65 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                6
              </li>
              <li
                style={{ '--idx': 66 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                7
              </li>
              <li
                style={{ '--idx': 67 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                8
              </li>
              <li
                style={{ '--idx': 68 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                9
              </li>
              <li
                style={{ '--idx': 69 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                10
              </li>
              <li
                style={{ '--idx': 70 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                11
              </li>
              <li
                style={{ '--idx': 71 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                12
              </li>
              <li
                style={{ '--idx': 72 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                13
              </li>
              <li
                style={{ '--idx': 73 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                14
              </li>
              <li
                style={{ '--idx': 74 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                15
              </li>
              <li
                style={{ '--idx': 75 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                16
              </li>
              <li
                style={{ '--idx': 76 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                17
              </li>
              <li
                style={{ '--idx': 77 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                18
              </li>
              <li
                style={{ '--idx': 78 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                19
              </li>
              <li
                style={{ '--idx': 79 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                20
              </li>
              <li
                style={{ '--idx': 80 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                21
              </li>
              <li
                style={{ '--idx': 81 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                22
              </li>
              <li
                style={{ '--idx': 82 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                23
              </li>
              <li
                style={{ '--idx': 83 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                24
              </li>
              <li
                style={{ '--idx': 84 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                25
              </li>
              <li
                style={{ '--idx': 85 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                26
              </li>
              <li
                style={{ '--idx': 86 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                27
              </li>
              <li
                style={{ '--idx': 87 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                28
              </li>
              <li
                style={{ '--idx': 88 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                29
              </li>
              <li
                style={{ '--idx': 89 } as React.CSSProperties}
                className='c-lesPJm c-lesPJm-ijbfUiq-css'
              >
                30
              </li>
            </ul>
          </div>
        </div>
      </div>

      <GithubCorners href='https://github.com/hunghg255/react-wheel-input' />
    </div>
  );
}
