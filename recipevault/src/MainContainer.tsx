import React, { useState } from "react";

/* 
  MainContainer for RecipeVault
  Modern layout with sidebar navigation and main content area. 
  Light theme using the following colors:
    - primary:   #4CAF50
    - secondary: #FFC107
    - accent:    #FF5722
*/

/**
 * PUBLIC_INTERFACE
 * MainContainer: The core layout for RecipeVault.
 * Handles navigation, applies theme, and roots feature areas for recipes and authentication.
 */
export const MainContainer: React.FC = () => {
  // State for sidebar navigation (for simple demo, single local state)
  const [currentSection, setCurrentSection] = useState("browse");

  // Minimal placeholder content for each section (to be implemented)
  const renderContent = () => {
    switch (currentSection) {
      case "browse":
        return (
          <div>
            <h2>Browse Recipes</h2>
            <p>Search and explore available recipes.</p>
          </div>
        );
      case "manage":
        return (
          <div>
            <h2>Recipe Management</h2>
            <p>Add, edit, or delete your recipes.</p>
          </div>
        );
      case "auth":
        return (
          <div>
            <h2>User Authentication</h2>
            <p>Login or register to manage recipes.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Navigation */}
      <nav style={styles.sidebar} aria-label="Sidebar navigation">
        <h1 style={styles.logo}>RecipeVault</h1>
        <ul style={styles.navList}>
          <li
            style={{
              ...styles.navItem,
              ...(currentSection === "browse" && styles.activeNavItem),
            }}
          >
            <button
              style={styles.navButton}
              onClick={() => setCurrentSection("browse")}
              aria-pressed={currentSection === "browse"}
            >
              Browse
            </button>
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(currentSection === "manage" && styles.activeNavItem),
            }}
          >
            <button
              style={styles.navButton}
              onClick={() => setCurrentSection("manage")}
              aria-pressed={currentSection === "manage"}
            >
              Manage
            </button>
          </li>
          <li
            style={{
              ...styles.navItem,
              ...(currentSection === "auth" && styles.activeNavItem),
            }}
          >
            <button
              style={styles.navButton}
              onClick={() => setCurrentSection("auth")}
              aria-pressed={currentSection === "auth"}
            >
              Login/Register
            </button>
          </li>
        </ul>
      </nav>
      {/* Main Content */}
      <main style={styles.mainContent}>{renderContent()}</main>
    </div>
  );
};

// Inline JS styles (could be refactored to CSS/SCSS modules for more complex apps)
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#fff",
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif',
    color: "#202020",
    boxSizing: "border-box",
  },
  sidebar: {
    width: "260px",
    background: "#f6f6f6",
    borderRight: "1.5px solid #ececec",
    padding: "32px 20px 24px 20px",
    boxShadow: "2px 0 8px rgba(76,175,80,0.03)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2rem",
  },
  logo: {
    fontSize: "2.05rem",
    fontWeight: "bold",
    color: "#4CAF50", // primary
    margin: "0 0 1.5rem 0",
    letterSpacing: "0.05em",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  navItem: {
    width: "100%",
    borderRadius: "7px",
    overflow: "hidden",
  },
  navButton: {
    width: "100%",
    padding: "0.9rem 0.5rem",
    background: "none",
    border: "none",
    fontSize: "1.08rem",
    cursor: "pointer",
    color: "#333",
    textAlign: "left",
    borderLeft: "5px solid transparent",
    transition: "background 0.15s, color 0.18s, border-left 0.16s",
  },
  activeNavItem: {
    background: "#E8F5E9", // very light green tint
    boxShadow: "1px 2px 8px #4CAF5011",
  },
  mainContent: {
    flex: 1,
    padding: "48px 36px",
    background: "#fff",
    minHeight: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "1.7rem",
    transition: "background 0.12s",
  },
};
