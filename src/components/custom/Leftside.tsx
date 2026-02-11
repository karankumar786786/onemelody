import React from "react";
import Link from "next/link";
import { House ,History,Heart} from "lucide-react";

function Leftside() {
  return (
    <div className="bg-amber-400 w-[20%]">
      <div className="bg-red-600">
        <div className="bg-green-500 text-center my-8 text-2xl font-bold ">
          Username
        </div>
        <div className="space-y-6">
            <div className=" bg-amber-900">
                <div>

                <Link href={``}>
              <House height={25} width={25} />
            <div>
                Home
            </div>
            </Link>
                </div>
            </div>
          <div className=" bg-amber-900">
                <Link href={``}>
              <House height={25} width={25} />
            </Link>
            <div>
                Artist
            </div>
            </div>
          <div className=" bg-amber-900">
                <Link href={``}>
              <House height={25} width={25} />
            </Link>
            <div>
                Playlist
            </div>
            </div>
          <div className=" bg-amber-900">
                <Link href={``}>
              <Heart height={25} width={25} />
            </Link>
            <div>
                Favourites
            </div>
            </div>
          <div className=" bg-amber-900">
                <Link href={``}>
              <History height={25} width={25} />
            </Link>
            <div>
                History
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
