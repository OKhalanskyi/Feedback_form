import styled from "styled-components";
import {InputHeightProps} from "../types";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height:1128px;
  display: flex;
  flex-direction: column;
  background-color:#FFFFFF;
  margin-left: auto;
  margin-right: auto;
  
`

export const MainPartStyle  = styled.div`
  display: flex;
  min-width: 1440px;
  height: 928px;
  flex-direction: row;
`

export const FormSide = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color:inherit;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`

export const PictureSide = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: inherit;
  justify-content: right;
  @media (max-width: 1000px) {
    display: none;
  }
`

export const FooterStyle = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  min-width: 1440px;
  height: 200px;
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
`

export const InputField = styled.input<InputHeightProps>`
  width: 557px;
  height: ${(props => props.height)}px;
  border-radius: 10px;
  background-color: #FFFFFF;
  border: 1px solid #DCDCDC;
  margin-bottom: 8px;
  box-sizing: content-box;
  padding-left: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  color: #2D2D2D;
  &::placeholder{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2D2D2D;
  }
`

export const MessageField = styled.textarea`
  width: 557px;
  height: 189px;
  border-radius: 10px;
  background-color: #FFFFFF;
  border: 1px solid #DCDCDC;
  margin-bottom: 8px;
  box-sizing: content-box;
  padding-left: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  color: #2D2D2D;
  padding-top: 31px;
  resize: none;
  &::placeholder{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2D2D2D;
  }
`

export const FormButton = styled.button`
  width: 218px;
  height: 73px;
  border-radius: 500px;
  background-color:#FAD34F;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #FFFFFF;
  margin-top: 15px;
  &:hover{
    cursor: pointer;
    background-color:#F472B7;
  }
`

export const FeedbackItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: goldenrod;
  border-radius: 20px;
  word-wrap: break-word;
`

export const FeedbackContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 50px;
`
