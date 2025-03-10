export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        &nbsp;<button id="wd-add-assignment-group">+ Group</button>
        &nbsp;<button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/1"
               className="wd-assignment-link" >
              A1 - ENV + HTML
            </a> 
            <p id="wd-A-1">
            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |
            <br />
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </p>
            </li>
            
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/2"
               className="wd-assignment-link" >
              A2 - CSS + BOOTSTRAP
            </a>
            <p id="wd-A-2">
            Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |
            <br />
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </p>
            </li>
        
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/3"
               className="wd-assignment-link" >
              A3 - JAVASCRIPT + REACT
            </a>
            <p id="wd-A-3">
            Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |
            <br />
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </p>
            </li>


        </ul>
      </div>
  );}
  