/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let firstPerson;
  let secondPerson; 
  let thirdPerson; 
  let loveTrianglesCount = 0;
  for (let i = 0; i < preferences.length; i++){
  	try{
	  	firstPerson = preferences[i];
	  	secondPerson = preferences[firstPerson-1];
	  	thirdPerson = preferences[secondPerson-1];
	  }
	catch(e){
	 	continue;
	}
  	if ((thirdPerson-1 === i) && (firstPerson !== secondPerson) && (firstPerson !== thirdPerson)&& (thirdPerson !== secondPerson)) {
  		loveTrianglesCount++;
  		preferences[i] = null;
  		preferences[firstPerson-1] = null;
  		preferences[secondPerson-1] = null;
  	}
  };
  return loveTrianglesCount;
};
