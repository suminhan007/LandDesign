#!/bin/bash

latest_version=$(npm show @suminhan/land-design version)

ajor_version=${latest_version%%.*}
minor_and_patch_version=${latest_version#*.}
minor_version=${minor_and_patch_version%%.*}
patch_version=${minor_and_patch_version#*.}

new_patch_version=$((patch_version + 1))

new_version=$ajor_version.$minor_version.$new_patch_version

npm version $new_version 

# node -p "require('./package.json').version" 获取当前 package.json 的版本

echo package version 当前最新版本为 $new_version 🚗🚗🚗

