# React Native FlatList Performance Issue

This repository demonstrates a common performance problem encountered when using FlatList in React Native with large datasets. The issue is characterized by slow rendering and an unresponsive UI when updating the list, especially with frequent additions or modifications.

## Problem

The primary challenge is that FlatList might unnecessarily re-render the entire list even for small data changes. This leads to significant performance degradation.

## Solution

The proposed solution utilizes `keyExtractor` and `ItemSeparatorComponent` to improve performance.  `keyExtractor` provides unique keys for each item, helping FlatList efficiently update only the necessary components. `ItemSeparatorComponent` optimizes rendering by reducing the number of re-renders by avoiding unnecessary component updates. 

## Setup

Clone this repository and run the app on a React Native environment.