import styled from "styled-components";

const PageStyle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BigText = styled.p`
    margin-top: ${ props => props.marginTop || "101px" };
    font-size: 28px;
    font-weight: 500;
    text-align: center;
`;

const BrandName = styled.span`
    font-weight: 700;
`;

const SmallText = styled.p`
    margin-top: ${props => props.marginTop || "22px"};
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    max-width: 341px;
`;

const Button = styled.button`
    width: ${props => props.width || "202px"};
    height: ${props => props.height || "45px"};
    background: #8C97EA;
    font-size: ${props => props.font || "18px"};
    font-weight: 700;
    border: none;
    border-radius: 10px;
    color: #fff;
    margin-top: ${props => props.marginTop || "0px"};
`;

const TextButton = styled.p`
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
`;

const FrontPageForm = styled.form`
    margin-top: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FrontPageInput = styled.input`
    width: 325px;
    height: 64px;
    border: 1px solid #604848;
    border-radius: 10px;
    font-weight: 500;
    font-size: 24px;
    padding-left: 17px;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    color: #333;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: rgba(96, 72, 72, 0.4);
        font-weight: 500;
        font-size: 24px;
        
    }
`;

const BlueText = styled.p`
    margin-top: ${props => props.marginTop || "20px"};
    font-weight: bold;
    font-size: 18px;
    color: #4D65A8;
    max-width: 280px;
    line-height: 21px;
`;

const WhiteBoard = styled.div`
    width: 90vw;
    max-width: 358px;
    height: ${props => props.height || "429px"};
    background: #FFFFFF;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.noAling ? "initial" : "center"};
`;

const CardImg = styled.img`
    width: 100%;
    height: ${props => props.height || "219px"};
    border-radius: 25px;
    object-fit: cover;
    margin-bottom: ${props => props.marginBottom || "0px"};
`;

const Select = styled.select`
    max-width: ${props => props.width || "290px"};
    width: 100%;
    height: 44px;
    background: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8;
    padding: 0 12px;
    margin-bottom: 7px;
    & > option{
        background: rgba(224, 209, 237, 0.62);
        color: #4D65A8;
        font-weight: bold;
    }
    &:focus{
        outline: none;
    }
`;

export { 
    PageStyle,
    BigText,
    BrandName,
    SmallText,
    Button,
    TextButton,
    FrontPageForm,
    FrontPageInput,
    BlueText,
    WhiteBoard,
    CardImg,
    Select,
};
