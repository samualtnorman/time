#!/bin/sh
set -xeu
node_modules/.bin/knip --no-config-hints
node_modules/.bin/tsc
node_modules/.bin/tsc --project src
scripts/npm.sh
scripts/jsr.sh
