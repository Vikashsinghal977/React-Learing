
function Mycomponents({classforName, name, income = 10}) {
    return (
      <>
  
        <hr />
        <div className={classforName}>
          {/* <hr /> */}
        {name} : ${income}
        </div>
      </>
    );
}

export default Mycomponents