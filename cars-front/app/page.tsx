import Image from "next/image";
import Popup from "./ui/components//Popup";
import CalendarTable from "./ui/components/CalendarTable";
import Table from "./ui/components/Table";

/* IMPORTATION DES DONNÉES DE COMMANDES, VÉHICULES, RAPPELS ET RÉSERVES CARROSSERIE */
/* I - LES COMMANDES */
import orders from "./lib/placeholder-data/placeholder-data-orders.json";
/* Récupérer les propriété de commandes, sans la propriété "Vehicles" */
const ordersWithoutVehicles = orders.map(({vehicles, ...rest}) => rest);
const ordersProps = Object.keys(ordersWithoutVehicles[0]);

/* II - LES CAMPAGNES DE RAPPEL */
import recalls from "./lib/placeholder-data/placeholder-data-recalls.json";
const recallsProps = Object.keys(recalls[0]);

/* IiI - LES RÉSERVES EN CARROSSERIE */
import bodyReservations from "./lib/placeholder-data/placeholders-data-bodyreservations.json";
const bodyReservationsProps = Object.keys(bodyReservations[0]);


export default function Home() {

  return (
    <div className="p-8">
      <main className="p-8">
        {/* I - PLANNING DU JOUR */}
        <section>
            <h2 className="text-2xl font-medium">Livraisons du jour</h2>
            <CalendarTable/>
        </section>
        {/* II - COMMANDES */}
        <section id="orders" className="w-full ">
          <h2 className="text-2xl font-medium">Commandes</h2>
          <div className="flex">
            {/* VÉHICULES LIVRABLES */}
            <section id="ongoing"> 
                <section>
                  <Table title="Commandes"
                    columns={ordersProps.map((prop) => prop.charAt(0).toUpperCase() + prop.slice(1))} 
                    rows={ordersWithoutVehicles.map((order:{}) => Object.values(order))}/>
                </section>
            </section>

            {/* VÉHICULES NON LIVRABLES */}
            <section id="standby" className="ml-10">  
              {/* Campagnes de rappel */}      
                <section>
                    <Table title="Campagnes de rappel"
                    columns={recallsProps.map((prop) => prop.charAt(0).toUpperCase() + prop.slice(1))} 
                    rows={recalls.map((recall:{}) => Object.values(recall))}/>
                </section>
              {/* Réserves carrosserie */}
                <section>
                  <Table title="Réserves carrosserie"
                    columns={bodyReservationsProps.map((prop) => prop.charAt(0).toUpperCase() + prop.slice(1))} 
                    rows={bodyReservations.map((reservation:{}) => Object.values(reservation))}/>
                </section>
            </section>
          </div>
        </section>
        <Popup/>
      </main>
    </div>
  );

  /*
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
  */
}
