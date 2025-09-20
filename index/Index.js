import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My App 🚀</h1>
      </header>

      <main>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Dark Mode Toggle 🌙</li>
            <li>Animations ✨</li>
            <li>Forms with Validation 📧</li>
          </ul>
        </section>

        <section>
          <h2>Subscribe</h2>
          <form id="emailForm">
            <input type="email" id="email" placeholder="Enter email" required />
            <button type="submit">Subscribe</button>
            <p id="errorMessage" style={{ color: "red" }}></p>
          </form>
        </section>

        <section>
          <h2>Sign Up</h2>
          <form id="signupForm">
            <input type="text" id="signupName" placeholder="Name" />
            <p id="nameError" style={{ color: "red" }}></p>

            <input type="email" id="signupEmail" placeholder="Email" />
            <p id="emailError" style={{ color: "red" }}></p>

            <input type="password" id="signupPassword" placeholder="Password" />
            <p id="passwordError" style={{ color: "red" }}></p>

            <input type="password" id="confirmPassword" placeholder="Confirm Password" />
            <p id="confirmPasswordError" style={{ color: "red" }}></p>

            <button type="submit">Sign Up</button>
            <p id="successMsg" style={{ color: "green" }}></p>
          </form>
        </section>

        <section>
          <h2>Fun Buttons</h2>
          <button id="Btn1">Click Me</button>
          <p id="message"></p>

          <button id="animateBtn">Toggle Animation</button>
          <div id="animatedBox" className="box"></div>
        </section>

        <section>
          <h2>Modal Example</h2>
          <button id="openModal">Open Modal</button>
          <div id="modal" className="modal">
            <div className="modal-content">
              <span id="closeModal" className="close">&times;</span>
              <p>Hello from the modal!</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Card Flip</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-front">Front</div>
              <div className="card-back">Back</div>
            </div>
          </div>
        </section>

        <section>
          <h2>Loader Control</h2>
          <button id="startLoader">Start Loader</button>
          <button id="stopLoader">Stop Loader</button>
          <div className="loader"></div>
        </section>

        <section>
          <h2>Features Animation</h2>
          <div className="feature-card">Card 1</div>
          <div className="feature-card">Card 2</div>
          <div className="feature-card">Card 3</div>
        </section>
      </main>

      <footer>
        <button id="themeToggle">🌙 Dark Mode</button>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
