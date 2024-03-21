const PlayerCard = ({player, ranked, general}: PlayerCardProps) => {
  return (
    <>
      { player ? (
        <div>
          <div className="border max-w-sm rounded overflow-hidden shadow-lg">
            <div className ="px-6 py-4">
              <div className="font-bold text-xl mb-2">General</div>
              <p className="text-gray-700 text-base">
                {player.brawlhalla_id}
              </p>
            </div>
            { general ? (
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Games: {general.games}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wins: {general.wins}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Losses: {general.games - general.wins}</span>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="border max-w-sm rounded overflow-hidden shadow-lg">
            <div className ="px-6 py-4">
              <div className="font-bold text-xl mb-2">Ranked</div>
              <p className="text-gray-700 text-base">
                {player.brawlhalla_id}
              </p>
            </div>
            { ranked ? (
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Games: {ranked.games}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wins: {ranked.wins}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Losses: {ranked.games - ranked.wins}</span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default PlayerCard