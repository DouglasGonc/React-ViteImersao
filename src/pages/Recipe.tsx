import styled from "styled-components";

const Secao1recope = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: start;
    column-gap: 40px;
    flex-wrap: wrap;

    .topo1l, .topo1r{
        flex: 1 1 0;
    }
    img{
        max-width: 100%;
        border-radius: 10px;
    }
    .topo1r{
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-direction: column;

        h1{
            font-size: 42px;
            font-weight: 500;
            line-height: 50.4px;
            padding-bottom: 20px;
        }
        h3{
            font-size: 16px;
            line-height: 24px;
            font-weight: 200;
            padding-bottom: 30px;
        }
        
    }
`;
const InfoTimer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding-bottom: 20px;

    div{
        flex: 1 1 0;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    div:nth-child(2) {
        border-style: solid;
        border-color: #eaecf0;
        border-width: 0 1px;
    }
`;
const InfoAutor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 30px 0 0 0;

    border-style: solid;
    border-color: #eaecf0;
    border-width: 1px 0 0 0;
`;

const Secao2recope = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: start;
    column-gap: 40px;

    h4{
        font-size: 22px;
        line-height: 30%.8;
        font-weight: 500;
        padding: 60px 0 30px 15px;
    }
    .topo2l{
        flex: 2 1 0px;
    }
    .topo2r{
        flex: 1 1 0px;
    }
    .topo2r div{
        display: flex;
        flex-direction: column;
        padding: 0 60px 0 15px;
    }
    .topo2r div .liingredients{
        padding: 0 0 20px 0;
        border-style: solid;
        border-color: #eaecf0;
        border-width: 0 0 1px 0;
        margin-bottom: 20px;
    }
`;
const Recipe: React.FC = () => {
    return (
        <>
            <Secao1recope>
                <div className="topo1l"><img src="https://via.placeholder.com/600x400" alt="" /></div>
                <div className="topo1r">
                    <h1>White calzones with marinara sauce</h1>
                    <h3>Supermarket brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check the label and choose ricotta made with as few ingredients as possible.</h3>
                    <InfoTimer>
                        <div>
                            <h5>Active Time</h5>
                            <span>20 mins</span>
                        </div>
                        <div>
                            <h5>Total Time</h5>
                            <span>50 mins</span>
                        </div>
                        <div>
                            <h5>Yield</h5>
                            <span>Serves 4</span>
                        </div>
                    </InfoTimer>
                    <InfoAutor>
                        <div>
                            <span>Created by Alex Williamns</span><br />
                            <span>21 recipes</span>
                        </div>
                        <div>1</div>
                    </InfoAutor>
                </div>
            </Secao1recope>

            <Secao2recope>
                <div className="topo2l">
                    <h4>How to Make It</h4>
                </div>
                <div className="topo2r">
                    <h4>Ingredients</h4>
                    <div>
                        <span className="liingredients">1 pound fresh prepared pizza dough</span>
                        <span className="liingredients">6 ounces shredded mozzarella cheese</span>
                        <span className="liingredients">3/4 cup of ricotta cheese</span>
                        <span className="liingredients">1 large egg yolk</span>
                        <span className="liingredients">1/2 teaspoon lemon zest</span>
                        <span className="liingredients">2 finely grated garlic cloves</span>
                        <span className="liingredients">1/2 teaspoon kosher salt</span>
                        <span className="liingredients">1/4 teaspoon black pepper</span>
                        <span className="liingredients">1 large egg</span>
                        <span className="liingredients">1 teaspoon dried Italian seasoning</span>
                    </div>
                    
                </div>
            </Secao2recope>
        </>
    );
};

export default Recipe;