import style from "./Tint.module.css"
export default function Tint(props){
    return  <div {...props} className={`${style.tint} ${props.className}`}/>
}