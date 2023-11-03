import styled from "styled-components"

const Button = styled.button`
display: inline-flex;
margin-left: 150px;
padding: 2px 36px 1px;
margin-bottom: 10px;
align-items: flex-end;
gap: 10px;
border-radius: 56px;
background: var(--input-stroke-unfocused-dark, #42307D);

@media screen and (max-width: 768px){
    padding: 20px 10px 0px 15px;
  width: 50px;
  height: 20px;
margin-left: 15px;
align-items: center;
gap: 5px;
}
`




export default Button