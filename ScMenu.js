/*---------------------------------------------
TIM Techniques d'Intégration Multimédia 2015
German Mahecha 
Groupe 1797
Professeur: Jonathan Martel
Ensemble Jeu - 2015
Partie du code vue en classe
http://unity3d.com/
-----------------------------------------------*/

#pragma strict
public var menuInstructions:GameObject;
public var menuCredits:GameObject;

function Start () {
	menuInstructions.SetActive(false);
	menuCredits.SetActive(false);
}

function DemarrerJeu () {
	Application.LoadLevel(1);
}

function RetournerMenu () {
	menuInstructions.SetActive(false);
	menuCredits.SetActive(false);
}

function MenuInstructions () {
	menuInstructions.SetActive(true);
}

function MenuCredits () {
	menuCredits.SetActive(true);
}