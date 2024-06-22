import Card from './Card';


function Tours({tours,removetour}) {
    return(
        <div className='container'>
          <div className='title'>
              <h2>Plan With Me</h2>
          </div>
          <div>
        {/* sare data ko ek ek kr ke dalne se acha hai haam map ka use kr len */}
        { 
         tours.map((tour) => {
            return(
                  //remove tour to card kr ander hai to mujhe eme bhi removetour ko props me pass krna pade ga
                 <Card className='cards' {...tour }removetour={removetour}></Card>
            );
         })
        }
          </div>
       </div>
    );
}



export default Tours;
