import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Shortname</th>
          <th>isSupported</th>
          <th>Program</th>
          <th>Rank</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Red Hat Enterprise Linux 9 System</td>
          <td>RHEL 9 System</td>
          <td>Yes</td>
          <td>Hardware</td>
          <td>100</td>

        </tr>
        <tr>
          <td>2</td>
          <td>Red Hat Enterprise Linux 8 System</td>
          <td>RHEL 8 System</td>
          <td>Yes</td>
          <td>Hardware</td>
          <td>101</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Red Hat Enterprise Linux 7 System</td>
          <td>RHEL 7 System</td>
          <td>Yes</td>
          <td>Hardware</td>
          <td>102</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Red Hat Enterprise Linux 9 Component</td>
          <td>RHEL 9 Component</td>
          <td>Yes</td>
          <td>Hardware</td>
          <td>103</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Red Hat Enterprise Linux 9 Edge System</td>
          <td>RHEL 9 Edge System</td>
          <td>Yes</td>
          <td>Hardware</td>
          <td>104</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
