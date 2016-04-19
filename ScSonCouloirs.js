#pragma strict
public var sonSpace:AudioClip;

function OnTriggerEnter(other: Collider) {
	GetComponent.<AudioSource>().clip = sonSpace;
	GetComponent.<AudioSource>().Play();
}

function OnTriggerExit(other: Collider)  {
	GetComponent.<AudioSource>().Stop();
}