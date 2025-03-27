import React from 'react';
import { Header, Footer, Body } from './Components';
import Extra from './Extra';

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Extra />
      <Footer />
    </div>
  );
};

export default App;
import React, {useState} from 'react'
import Greetings from './Greetings' ;
import Border from './Border' ;
import Welcome from './Welcome' ;


const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <Border>
        <Greetings name={name} />
      </Border>
      <Welcome onNameChange={handleNameChange} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const App = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  function convertTemp(c) {
    let far = parseFloat((c * 9/5) + 32);
    setFahrenheit(far);
  }

  return (
    <div>
      <input
        type="number"
        value={celsius}
        onChange={(e) => {
          let value = parseFloat(e.target.value) || 0; // Handle empty input
          setCelsius(value);
          convertTemp(value);
        }}
      />
      <p>Celsius: {celsius}</p>
      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
};

export default App;
import React from 'react'

export const Try = () => {
  return (
    <div>Try</div>
  )
}

import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  } 

  componentDidUpdate(prevProps, prevState) {
    // Check if the name has changed
    if (prevState.name !== this.state.name) {
      console.log(`Name changed to: ${this.state.name}`);
      // You can also call the onNameChange prop if needed
      this.props.onNameChange(this.state.name);
    }
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Optionally, you can call the onNameChange prop here as well
    this.props.onNameChange(this.state.name);
    this.setState({ name: '' }); // Clear the input after submission
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Welcome;# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  function bmiConverter() {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 1
      const calculatedBmi = parseFloat(weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
    } else {
      alert("Please enter both weight and height.");
    }
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter weight (kg)"
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter height (cm)"
      />
      <button onClick={bmiConverter}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default App;
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

