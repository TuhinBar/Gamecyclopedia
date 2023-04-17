import {ListResponse} from "@/types/Response";
import Card from "./UI/Card";


const List: React.FC<ListResponse> = ({games}) => {
  return (
    <>
            <div className="flex flex-col justify-center items-center w-full gap-4 p-8 overflow-none">

            
                {games.map((game) => (
                    <Card className="w-[60%]" key={game.id}>
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