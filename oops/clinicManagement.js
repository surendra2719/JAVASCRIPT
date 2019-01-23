/*****************************************************************************************
 *purpose   :  This programme is used to manage a list of Doctors associated with the Clinique
               This also manages the list of patients who use the clinique.
 * @file    :  clinicManagement.js
 * @overview:  It manages Doctors by Name, Id, Specialization and Availability (AM,  PM or both).
               It manages Patients by Name, ID, Mobile Number and Age. 
               The Program allows users to search Doctor by name, id, Specialization or Availability
               Also the programs allows users to search patient by name, mobile number or id. The programs allows patients to take appointment with the doctor
               A doctor at  any availability time can see only 5 patients.
 * @author  :  surendra 
 * @version :  1.0
 * @since   :  04/01/2019 
 **************************************************************************/
var filestream = require('fs');
var utility = require('../oops/utilityForOoops');
var content = filestream.readFileSync('../oops/JSONfiles/clinic.json');
/**
 * filstream reading the files 
 * acess access the file from util
 * content redaing content from JSON files  
 */
var data = JSON.parse(content);
/**
 * JSON.parse it converts contents in JSON files to javaScript object
 */
function clinic() {   /**
     * accessing the inventory method from util
     */
    utility.clinicManagement(data);
}
clinic();