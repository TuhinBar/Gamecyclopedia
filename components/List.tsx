import {ListResponse} from "@/types/Response";
import Card from "./UI/Card";


const List: React.FC<ListResponse> = ({games}) => {
  return (
    <>
            <div className="flex flex-col h-full justify-center items-center mt-32 w-full gap-4 p-8">

            
                {games.map((game) => (
                    <Card className="sm:w-[60%] w-[90%]" key={game.id}>
                        <div className="flex items-center justify-center">
                            {game.name}
                        </div>
                    </Card>
                ))}
                </div>

    </>
  );
};

export default List;