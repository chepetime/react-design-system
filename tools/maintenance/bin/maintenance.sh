#!/bin/bash

# Set the -e option
set -e

# Function to check if a file or directory exists
file_exists() {
  if [ -e "$1" ]; then
    return 0
  else
    return 1
  fi
}

# Traverse directories upwards until one of the target files or directories is found
current_dir=$(pwd)
parent_dir=$(dirname "$current_dir")
root="$(pwd)"

while [ "$parent_dir" != "$current_dir" ]; do
  if file_exists "$parent_dir/package.json" || \
    file_exists "$parent_dir/package-lock.json" || \
     file_exists "$parent_dir/.git" || \
     file_exists "$parent_dir/pnpm-workspace.yaml" || \
     file_exists "$parent_dir/pnpm-lock.yaml"; then
    root=$parent_dir
  fi
  current_dir="$parent_dir"
  parent_dir=$(dirname "$current_dir")
done

echo $root

# Start at Root
cd $root

# Check updates
# Removed npm-check-updates from the loop because it has better performance
npx npm-check-updates -u --cacheClear --silent --workspaces --root

# Find all directories containing package.json files within two levels above the current directory (excluding node_modules)
directories=$(find $root -maxdepth 3 -type d -name "node_modules" -prune -o -type f -name "package.json" -exec dirname {} \;)

# Sort the directories based on path length
sorted_directories=$(echo "$directories" | awk '{print length, $0}' | sort -n -s | cut -d' ' -f2-)

# Loop through the directories and print the contents using ls
for dir in $sorted_directories; do
  # echo "$dir"
  ## Specify the path to the package.json file
  package_json_path="$dir/package.json"
  name="$(node -e "console.log(require('$package_json_path')['name']) || ''")"
  version="$(node -e "console.log(require('$package_json_path')['version']) || ''")"
  echo "$name (v$version)"
  cd $dir
  npx prettier-package-json --write ./package.json --expand-users
  # Run any command you need inside every repository
  #
  #
  #
done

# Go back to root
cd $root

# Install updated dependencies
pnpm i

# Build packages and apps
pnpm run build