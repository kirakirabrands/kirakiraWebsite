@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);
  html {
    font-size: 16px;
}

html, body {
  height: 100 %;
  min - height: 415px;
}

body {
  background - color: #4ccadc;
  font - size: 13px;
}

#main {
  position: absolute;
  width: 300px;
  left: 50 %;
  top: 50 %;
  transform: translateX(-50 %) translateY(-50 %);
  text - align: center;
}

/* timeline */
.timeline {
  overflow: hidden;
  position: relative;
  margin - top: 2.25em;
  padding - left: 100px;
}
.timeline: before, .timeline: after {
  content: "";
  width: 75px;
  position: absolute;
  top: 0;
  height: 96px;
  z - index: 1;
}
.timeline: before {
  left: 0;
  background - image: linear - gradient(to right, #4ccadc, rgba(76, 202, 220, 0));
}
.timeline: after {
  right: 0;
  background - image: linear - gradient(to right, rgba(76, 202, 220, 0), #4ccadc);
}

/* timeline ul */
.timeline - list {
  margin: 0;
  padding: 0;
  white - space: nowrap;
  list - style: none;
  transition: transform 600ms cubic - bezier(0.68, -0.55, 0.265, 1.55);
}

.timeline - item {
  display: inline - block;
  vertical - align: top;
  width: 24px;
}
.timeline - item: before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 2px;
  height: 8px;
  background: #2d2c2e;
}
.timeline - item.- date {
  width: 36px;
}
.timeline - item.- date span {
  font - family: "Roboto", sans - serif;
  display: block;
  margin: 2em 0;
  font - weight: 700;
}
.timeline - item.- date: before {
  width: 4px;
  height: 14px;
}

.c {
  position: fixed;
  bottom: 0;
  right: 0;
  display: inline - block;
  font - size: 0.7rem;
  padding: 1.5em 2em;
  font - family: Monaco, monospace;
  color: #145c67;
}