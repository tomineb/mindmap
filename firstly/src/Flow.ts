import React, {useState} from 'react' 
import App from './App'

//code is not complete. 


const Movement = () => {

    const travel = []; 
    const val = 2000; 
    const words = document.getElementById("submitWords");

    if(Math.random())
    
    interface onYourMind {
        text: string; 
        left: number; 
        top: number; 
    }
    
        const addIssues = () => {
    
        const [items, setItems] = useState<onYourMind[]> ([]); 
        const [wordValue, setWordValue] = useState(''); 
    
        const handleWords = () => {
        const newWord: onYourMind = {
            text: wordValue,
            left: Math.random() * (window.innerWidth - 100), 
            top: Math.random() * (window.innerHeight - 100), 
        }; 
            
        setItems([...items, newWord]); 
        setWordValue(''); 
    
    
        }

}}; 
    
export default Movement; 


