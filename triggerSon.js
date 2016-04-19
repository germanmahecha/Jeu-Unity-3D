public var sonElectro3D:AudioClip;

function OnTriggerEnter(other: Collider){
	Debug.Log("Collider Son");
 	 GetComponent.<AudioSource>().clip = sonElectro3D;
	 GetComponent.<AudioSource>().Play();
}