import './Demo.css'

const Demo = () => {

    const categoryImgs = [
        {
            name: 'name1',
            types: ["Men'S Top Wear",
                "Men's Bottom Wear",
                "Women Ethnic"]
        },
        {
            name: 'name2',
            types: []
        }
    ];
    return (
        <div>
            <div>
                {categoryImgs.map((obj) => {
                    return <div key={obj}>
                        {obj.types.map((type) => {
                            return <p key={type}>{type}</p>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Demo