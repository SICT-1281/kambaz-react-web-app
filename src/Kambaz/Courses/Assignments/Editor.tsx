export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application
          running on Netlify. The landing page should include the following: Your full name and section
          Links to each of the lab assignments Link to the Kanbas application Links to all relevant
          source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
            </td>
            <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
          <select id="wd-group">
            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
        </select>
        </td>
        </tr>
        <br />

        <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-display-grade-as">Display Grade as  </label>
          </td>
          <td>
          <select id="wd-display-grade-as">
            <option selected value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
        </select>
          </td>
        </tr>
        <br />

        <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select id="wd-submission-type">
            <option selected value="ONLINE">Online</option>
            <option value="INPERSON">In person</option>
         </select>
         <br />
         <br />
          <label htmlFor="wd-submission-type">Online Entry Options</label><br />

         <input type="checkbox" name="check-online-entry-options" id="wd-text-entry"/>
         <label htmlFor="wd-text-entry">Text Entry</label><br/>

         <input type="checkbox" name="check-online-entry-options" id="wd-website-url"/>
         <label htmlFor="wd-website-url">Website URL</label><br/>

         <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings"/>
         <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

         <input type="checkbox" name="check-online-entry-options" id="wd-student-annotation"/>
         <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

         <input type="checkbox" name="check-online-entry-options" id="wd-file-upload"/>
         <label htmlFor="wd-file-upload">File Uploads</label>
         </td>
         </tr>
         <br />
        
        <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label><br />
          <input id="wd-assign-to" value="Everyone" /><br /><br />
          <label htmlFor="wd-due-date">Due</label><br />
          <input type="date"
            value="2024-05-13"
            id="wd-due-date"/><br/><br/>
        <td>
        <label htmlFor="wd-available-from">Available from</label><br />

          <input type="date"
            value="2024-05-06"
            id="wd-available-from"/>
        </td>
        <td>
        <label htmlFor="wd-available-until	">Until</label><br />
          <input type="date"
            value="2024-05-20"
            id="wd-available-until	"/>
          </td>
          </td>
        </tr>
        </table>

        <hr />
        <div style={{ textAlign: 'right' }}>
        <button id="wd-cancle">Cancel</button>&nbsp;
        <button id="wd-save">Save</button>
        </div>
    </div>
);}

  