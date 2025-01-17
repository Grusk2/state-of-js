import React from 'react';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  const frameworks = [
    { name: 'React', color: '#61dafb', values: [93, 93, 91, 89, 88, 84] },
    { name: 'Vue', color: '#42b883', values: [87, 91, 91, 87, 85, 80] },
    { name: 'Angular', color: '#dd0031', values: [68, 66, 41, 38, 42, 45] },
    { name: 'Ember', color: '#9C27B0', values: [47, 41, 45, 31, 27, 21] },
    { name: 'Preact', color: '#FF5722', values: [null, null, 84, 78, 78, 74] },
    { name: 'Svelte', color: '#FFC107', values: [null, null, null, null, 89, 90] },
    { name: 'Alpine', color: '#00BCD4', values: [null, null, null, null, 82, 79] },
    { name: 'Lit', color: '#FF9800', values: [null, null, null, null, 78, 77] },
    { name: 'Stimulus', color: '#4CAF50', values: [null, null, null, null, 67, 62] },
    { name: 'Solid', color: '#2196F3', values: [null, null, null, null, null, 90] },
  ];

  const years = [2016, 2017, 2018, 2019, 2020, 2021];

  return (
    <div id="root">
      <header id="Header">State of JavaScript</header>
      <div className="header-row">
        <span className="spacer"></span>
        {years.map((year, index) => (
          <span key={index} className="year">
            {year}
          </span>
        ))}
        <span className="spacer"></span>
      </div>
      {frameworks.map((framework, index) => (
        <div key={index} className="framework-row">
          <span
            className="framework-name"
            style={{ color: framework.color }}
          >
            {framework.name}
          </span>
          <div className="framework-values">
            {framework.values.map((value, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`line ${value !== null ? '' : 'invisible'}`}
                  style={{ backgroundColor: framework.color }}
                ></div>
                {value !== null ? (
                  <div
                    className="circle"
                    style={{ borderColor: framework.color }}
                  >
                    {value}%
                  </div>
                ) : (
                  <div className="circle invisible"></div>
                )}
              </React.Fragment>
            ))}
            <div className="line invisible"></div>
          </div>
          <span
            className="framework-name"
            style={{ color: framework.color }}
          >
            {framework.name}
          </span>
        </div>
      ))}
      <div className="button-row">
        <button className="action-button">Retention</button>
        <button className="action-button">Interest</button>
        <button className="action-button">Usage</button>
        <button className="action-button">Awareness</button>
      </div>
    </div>
  );
};

export default App;