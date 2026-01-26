import Image from "next/image";
import Popup from "./Popup";
import CalendarTable from "./CalendarTable";
import OrdersTable from "./Orders/OrdersTable";
import RecallsTable from "./Recalls/RecallsTable";
import BodyReservationsTable from "./BodyReservations/BodyReservationsTable";
import Table from "./Table";


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
                    columns={["N°", "Statut", "Date (Livraison, Arrivée, Déstockage)", "Condition", "Client", "Véhicule(s)", "Accessoire(s)", "Dernière action, note"]} 
                    rows={[
                      {"N°": "1258", "Statut": "En cours", "Date": "10/03/2026", "Condition": "Appel du gestionnaire", "Client": "Société ENM", "Véhicule(s)": "2", "Accessoire(s)": "0", "Dernière action, note": "Rappel le 05/03"},
                      {"N°": "1259", "Statut": "En cours", "Date": "12/03/2026", "Condition": "Livraison prévue", "Client": "Société ABC", "Véhicule(s)": "1", "Accessoire(s)": "2", "Dernière action, note": "Note ajoutée"},
                      {"N°": "1260", "Statut": "En cours", "Date": "15/03/2026", "Condition": "En attente de déstockage", "Client": "Société XYZ", "Véhicule(s)": 3, 	"Accessoire(s)": 1, 	"Dernière action, note": 	"Contacté le 01/03"},
                      {"N°": 	"1261", 	"Statut":"En cours","Date":"18/03/2026","Condition":"Préparation en cours","Client":"Société LMN","Véhicule(s)":"2","Accessoire(s)":"0","Dernière action, note":"En attente de confirmation"},
                      {"N°":"1262","Statut":"En cours","Date":"20/03/2026","Condition":"Livraison prévue","Client":"Société DEF","Véhicule(s)":"1","Accessoire(s)":"3","Dernière action, note":"Note ajoutée"}
                    ]}/>
                </section>
            </section>

            {/* VÉHICULES NON LIVRABLES */}
            <section id="standby" className="ml-10">  
              {/* Campagnes de rappel */}      
                <section>
                    <Table title="Campagnes de rappel"
                    columns={["N°", "Campagne", "Statut", "Date de fin"]} 
                    rows={[
                      {"N°": "R001", "Campagne": "Rappel 2026", "Statut": "En cours", "Date de fin": "15/03/2026"},
                      {"N°": "R002", "Campagne": "Rappel 2027", "Statut": "En attente", "Date de fin": "20/03/2027"},
                      {"N°": "R003", "Campagne": "Rappel 2028", "Statut": "Terminé", "Date de fin": "10/03/2028"}
                    ]}/>
                </section>
              {/* Réserves carrosserie */}
                <section>
                  <Table title="Réserves carrosserie"
                    columns={["N°", "Statut"]} 
                    rows={[
                      {"N°": "R001", "Statut": "En cours"},
                      {"N°": "R002", "Statut": "En attente"},
                      {"N°": "R003", "Statut": "Terminé"}
                    ]}/>
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
