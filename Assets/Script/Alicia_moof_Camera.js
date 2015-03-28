var target : Transform;

private var zoomSpeed = 0.5;

private var distance = 0.7;

private var orbitX = 17.0;
private var orbitY = 17.0;

private var x = 0.0;
private var y = 0.0;

private var firstdistance = 0.0;
private var firstanglex = 0.0;
private var firstangley = 0.0;

var rotationDamping : float = 3.0;

function Start () {
	
	firstdistance = distance;
	
    var angles = transform.eulerAngles;
    x = angles.y;
	firstanglex = angles.y;
    y = angles.x;
    firstangley = angles.x;
	
}

function LateUpdate (){
	
	//zoom
	if (Input.GetMouseButton(1)) {
		distance += Input.GetAxis("Mouse Y") * zoomSpeed;
		distance = Mathf.Clamp(distance, 0.5, 2);
    }else
   		distance -= (distance - firstdistance) * Time.deltaTime;
    
	//orbit
    if (Input.GetMouseButton(0)) {
    
        x += Input.GetAxis("Mouse X") * orbitX;
        y -= Input.GetAxis("Mouse Y") * orbitY;
        
    }else{
    	x -= (x - firstanglex) * Time.deltaTime;
    	y -= (y - firstangley) * Time.deltaTime;
    }
 		       
    var rotation = Quaternion.Euler(y, x, 0);
    var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
   	
   	target.transform.rotation = rotation;
   	transform.position = position;
   	
}
