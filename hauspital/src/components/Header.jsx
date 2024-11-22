const Header =({title, leftChild})=>{
    return(
        <div className="">
            <div>{leftChild}</div>
            <div>{title}</div>
        </div>
    );
};

export default Header;