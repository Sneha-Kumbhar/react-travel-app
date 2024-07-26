
import Card from "./Card"

function Travel ({data,Remove}) {
    console.log(data)
    return(
        <>

        <h1 className="heading">Travel App</h1>
        
        <div className="main" style={{display:'flex',flexWrap:'wrap'}}>
        {
            data.map((items)=>{
                return(
                    <Card key={items.id} {...items} Remove={Remove} />
                )
            })
        }
        </div>
        </>
    )
}

export default Travel