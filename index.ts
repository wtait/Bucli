#! /usr/bin/env bun
import { $, file } from "bun"

// Function to create a print delay
function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function printArt(filePath: string) {
  // Read the file content
  let content = await file(filePath).text()
  
  // Split the content into lines
  let lines = content.split('\n')
  
  // Iterate over each line
  for (let line of lines) {
    console.log(line)
    await delay(75)
  }
}

await printArt('art/bucli.txt')