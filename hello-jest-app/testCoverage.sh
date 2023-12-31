#!/bin/bash

react-scripts test --coverage --watchAll \
    --collectCoverageFrom='src/**/*.{ts,tsx}' \
    --collectCoverageFrom='!src/{@types,constants,utils,providers}/**/*.{ts,tsx}' \
    --collectCoverageFrom='!src/*.{ts,tsx}' \
    --collectCoverageFrom='src/App.{ts,tsx}'