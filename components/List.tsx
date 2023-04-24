import {ListResponse} from "@/types/Response";
import Card from "./UI/Card";
import Suspense from "./Suspense";
import Image from "next/image";
import {AiFillFire} from 'react-icons/ai'


const List: React.FC<ListResponse> = ({games}) => {
  return (
    <>
            <div className="flex flex-col h-full justify-center items-center mt-36 w-full gap-4 sm:p-8">

            
                {games.map((game) => (
                  <Suspense key={game.id}>
                    <Card className="sm:w-[60%] w-[90%] cursor-pointer  border-4 border-cyan-500 border-dash bg-gradient-to-r from-amber-500 to-amber-300" >
                        <div className="w-full px-8 flex items-center justify-start">
                            <Image className="rounded-md" src={`https://img.opencritic.com/${game.images.box.og}`} width={60} height={60} alt={game.name} />
                            <div className="mx-4">
                            <p className="text-white text-md font-semibold">{game.name}</p>
                            <div className="flex gap-2">

                            <strong className="text-white">Tier : </strong>
                            <span className={`flex items-center justify-center ${game.tier === 'Strong'? 'text-green-800': game.tier === 'Mighty'?'text-blue-700': 'text-red-800'}`}>{game.tier} {
                                game.tier === 'Strong'? <AiFillFire className="text-green-800" />: game.tier === 'Mighty'? <AiFillFire className="text-blue-800" />: <AiFillFire className="text-red-800" />
                            }</span>
                            </div>

                            </div>
                            <div className="ml-auto flex flex-col justify-center items-center">
                              <strong className="text-white">Score</strong>
                            <p className={`${game.topCriticScore > 70? 'bg-green-600': game.topCriticScore> 50? 'bg-orange-600': 'bg-red-800'} rounded-lg text-white text-md font-semibold px-2 py-1`}>{Math.floor(game.topCriticScore)}</p>
                            </div>
                        </div>
                    </Card>
                    </Suspense>
                ))}
                </div>

    </>
  );
};

export default List;