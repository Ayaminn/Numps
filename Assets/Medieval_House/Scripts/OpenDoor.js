#pragma strict
var doorObject:GameObject;
var openedDoor:boolean;
function Start () {
	openedDoor=true;
}

function Update () {
	
}

/*function OnCollisionEnter(other:collider){
	if (openedDoor){
		doorObject.animation.Play();
		openedDoor=false;
		Debug.Log("open");
	}*/
//}