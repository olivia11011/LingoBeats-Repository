import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";

export default function Player() {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__title">Test</div>
        <div className="card__subtitle">Michael Jackson</div>
        <div className="card__wrapper">
          <div className="card__time card__time-passed">03:34</div>
          <div className="card__timeline">
            <progress value={55} max={100} />
          </div>
          <div className="card__time card__time-left">02:04</div>
        </div>
        <div className="card__wrapper">
          <button className="card__btn">
            <svg
              width={23}
              height={16}
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z"
                fill="#fff"
              />
            </svg>
          </button>
          <PlayButton />
          <button className="card__btn text-sm">Take Quiz</button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --main-color: #fff;
    --bg-color: #090909;
    --sub-main-color: #b9b9b9;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    width: auto;
    height: auto;
    background: var(--bg-color);
    border-radius: 20px;
    padding: 30px;
  }

  .card__menu {
    cursor: pointer;
  }

  .card__title {
    font-weight: 500;
    font-size: 28px;
    color: var(--main-color);
    text-align: center;
    margin-bottom: 10px;
  }

  .card__subtitle {
    font-weight: 400;
    font-size: 16px;
    color: var(--sub-main-color);
    text-align: center;
    cursor: pointer;
  }

  .card__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 400px;
    margin-top: 20px;
  }

  .card__time {
    font-weight: 400;
    font-size: 12px;
    color: var(--main-color);
  }

  .card__timeline {
    width: 100%;
    height: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .card__timeline progress {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }

  .card__timeline progress::-webkit-progress-bar {
    background-color: #424242;
    border-radius: 100px;
  }

  .card__timeline progress::-webkit-progress-value {
    background-color: #fff;
    border-radius: 100px;
  }

  .card__btn {
    background: transparent;
    width: 40px;
    cursor: pointer;
    color: white;
  }

  .card__btn path {
    fill: var(--main-color);
  }

  .card__btn-play {
    width: 60px;
    height: 60px;
    background: var(--main-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card__btn-play path {
    fill: var(--bg-color);
  }
`;
