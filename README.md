
# React Vertical Carousel

This project implements a vertical carousel component in React. The carousel displays one item in the center of the screen, with 20% of the previous and next items visible above and below it. The carousel automatically scrolls to center the selected item and loops back to the beginning after reaching the last item.

<img src="https://github.com/lokesh010/ngit/blob/main/public/readme.png"/>

## Features

- **Smooth Scrolling:** The carousel scrolls smoothly to center the selected item.
- **Looping:** Once the last item is reached, the carousel loops back to the first item.
- **Responsive Design:** The carousel adjusts to different screen sizes.
- **Atomic Design:** The component is structured using atomic design principles, making it modular and easy to maintain.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/lokesh010/ngit
    ```
2. Navigate to the project directory:
    ```bash
    cd ngit 
    ```
3. Install the dependencies:
    ```bash
    pnpm install
    ```
4. Start the development server:
    ```bash
    pnpm start
    ```

## Usage

### Carousel Component

You can use the `CarouselTemplate` component by passing in an array of items. Each item will be displayed in the carousel.

### Example Usage

```jsx
import React from 'react';
import Carousel from './Carousel';

const items = Array(10).fill(null);

function App() {
  return (
      <div
        ref={containerRef}
        className="carousel-container"
        onScroll={handleScroll}
      >
        <CarouselTemplate items={items} currentIndex={currentIndex} />;
      </div>
  );
}

export default App;
```
### Component Structure

The carousel component is built using atomic design principles:

- **Atoms:** The smallest, most basic building blocks.
  - **`BasicAtom`:** A simple box element with `inset-border` and `rounded-3xl` styles.
  - **`PrimaryBackgroundAtom`:** Extends `BasicAtom` to include the `bg-primaryBackground` style.
  - **`CircleAtom`:** A circular background element, extended from `PrimaryBackgroundAtom`.
  - **`FlexContainer`:** A flexible container for arranging elements in a row.

- **Molecules:** Groups of atoms functioning together as a unit.
  - **`TextBlockMolecule`:** A vertical stack of text elements created by combining `PrimaryBackgroundAtom` components.
  - **`AvatarWithTextMolecule`:** Combines a `CircleAtom` with a `TextBlockMolecule` to create a row with an avatar and text.

- **Organisms:** More complex components composed of molecules and atoms.
  - **`CarouselItemOrganism`:** The main carousel item, combining a `PrimaryBackgroundAtom` for the top section and an `AvatarWithTextMolecule` for the bottom section.

- **Templates:** Layouts that combine organisms and other components into structured arrangements.
  - **`CarouselTemplate`:** A template that arranges multiple `CarouselItemOrganism` components in a scrollable vertical container.

