import Image from "next/image";

export default function Home() {

  return (
    <div className="p-8">
      <main className="p-8">
        {/* flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black */}
        {/* flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start */}
        {/* I - PLANNING DU JOUR */}
        <section>
            <h2 className="text-2xl font-medium">Livraisons du jour</h2>
            <table className="w-full border-table-lines border-2 rounded-md p-4 mt-8">
                <thead className="border-b-1-background">
                    <tr>
                        <th>Heure</th>
                        <th>Client</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>9:00</td>
                        <td>ENM</td>
                        <td>Livraison de 1 Peugeot 2008</td>
                    </tr>
                    <tr>
                        <td>11:00</td>
                        <td>Régie de l'Eau</td>
                        <td>Livraison de 5 Peugeot 208</td>
                    </tr>
                </tbody>
            </table>
        </section>
        {/* II - VEHICULES */}
        <section id="orders" className="w-full ">
          <h2 className="text-2xl font-medium">Commandes</h2>
          <div className="flex">
            {/* VÉHICULES LIVRABLES */}
            <section id="ongoing"> 
                <section>
                    <table className="w-full border-table-lines border-2 rounded-md p-4 mt-8">
                        <thead>
                            <tr>
                                <th colSpan={8}><h3>Commandes en cours</h3></th>
                            </tr>
                        </thead>
                        <thead className="border-1 border-background">
                            <tr>
                              <th>n° Cmde</th>
                              <th>Statut</th>
                              <th>Date (Livraison, Arrivée, Déstockage)</th>
                              <th>Condition</th>
                              <th>Client</th>
                              <th>Véhicule(s)</th>
                              <th>Accessoire(s)</th>
                              <th>Dernière action, note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>12</td>
                              <td>Livraison programmée</td>
                              <td>02/02/2026</td>
                              <td>---</td>
                              <td>ENM</td>
                              <td>5 Peugeot 208</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>

                            <tr>
                              <td>16</td>
                              <td>Livraison programmée</td>
                              <td>15/02/2026</td>
                              <td>---</td>
                              <td>ENM</td>
                              <td>3 Peugeot 3008</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>Livraison programmée</td>
                              <td>15/02/2026</td>
                              <td>---</td>
                              <td>Domofrance</td>
                              <td>Peugeot 208</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>45</td>
                              <td>Déstockage en cours</td>
                              <td>Arrivée prévue le 02/03/2026</td>
                              <td>---</td>
                              <td>Client</td>
                              <td>Véhicule(s)</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>42</td>
                              <td>Déstockage en attente</td>
                              <td>---</td>
                              <td>Déstocker quand dossier complété</td>
                              <td>ENM</td>
                              <td>5 Peugeot 2008</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>

            {/* VÉHICULES NON LIVRABLES */}
            <section id="standby" className="ml-10">        
                <section>
                    <table className="w-full border-table-lines border-2 rounded-md p-4 mt-8">
                        <thead>
                            <tr>
                              <th colSpan={8}><h3>Rappels constructeurs</h3></th>
                            </tr>
                        </thead>
                        <thead className="border-background border-1">
                            <tr>
                                <th>n° Cmde</th>
                                <th>n° campagne</th>
                                <th>Statut</th>
                                <th>Client</th>
                                <th>Véhicule(s)</th>
                                <th>Dernière action, note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>45</td>
                              <td>2023-AB12</td>
                              <td>En atelier</td>
                              <td>ENM</td>
                              <td>Peugeot 208</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>13</td>
                              <td>2022-CD34</td>
                              <td>En atelier</td>
                              <td>ARS Aquitaine</td>
                              <td>Peugeot 2008</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>51</td>
                              <td>2023-EF56</td>
                              <td>En atelier</td>
                              <td>Domofrance</td>
                              <td>Peugeot 308</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>61</td>
                              <td>2023-GH78</td>
                              <td>Dossier demandé</td>
                              <td>ENM</td>
                              <td>Peugeot 3008</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>49</td>
                              <td>2023-IJ90</td>
                              <td>Dossier demandé</td>
                              <td>Domofrance</td>
                              <td>Peugeot 208</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>2022-KL12</td>
                              <td>Dossier demandé</td>
                              <td>Domofrance</td>
                              <td>Peugeot 3008</td>
                              <td>---</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <table className="border-table-lines border-2 rounded-md p-4 mt-8">
                        <thead className="border-bottom--foreground">
                            <tr>
                              <th colSpan={6}><h3>Réserves carrosseries</h3></th>
                            </tr>
                        </thead>
                        <thead className="border-bottom--foreground">
                            <tr>
                              <th>n° Cmde</th>
                              <th>Statut</th>
                              <th>Client</th>
                              <th>Véhicule</th>
                              <th>Dernière action, note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>16</td>
                              <td>En atelier</td>
                              <td>ENM</td>
                              <td>Peugeot 208</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>En atelier</td>
                              <td>ARS Aquitaine</td>
                              <td>Peugeot 2008</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>27</td>
                              <td>En atelier</td>
                              <td>Domofrance</td>
                              <td>Peugeot 308</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>38</td>
                              <td>Dossier demandé</td>
                              <td>ENM</td>
                              <td>Peugeot 3008</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>29</td>
                              <td>Dossier demandé</td>
                              <td>Domofrance</td>
                              <td>Peugeot 208</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>19</td>
                              <td>Dossier demandé</td>
                              <td>Domofrance</td>
                              <td>Peugeot 3008</td>
                              <td>---</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
          </div>
        </section>

        {/* MODALE : DÉTAIL D'UNE COMMANDE */}
        <section id="order-detail">
          <h3 className="text-2xl font-medium">Commande n°1258 - En cours</h3>
          <h4>Véhicule(s)</h4>
          <table className="border-table-lines border-2 rounded-md p-4 mt-8">
              <thead>
                  <tr>
                    <th>Véhicule(s)</th>
                    <th>Statut</th>
                    <th>Date (Livraison, Arrivée, Déstockage)</th>
                    <th>Condition</th>
                    <th>Accessoire(s)</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <th>VF7 SBHMZ0 FX554573 - Peugeot - 308 - bleue - options - CG-750-OV - microhybride</th>
                    <th>En concession</th>
                    <th>---</th>
                    <th>---</th>
                    <th>---</th>
                  </tr>
                  <tr>
                    <th>VF7 SBHHZ1 AW554823 - Peugeot - 308 - bleue - options - QD-495-YU - microhybride</th>
                    <th>En déstockage</th>
                    <th>Arrivée prévue le 15/03/2026</th>
                    <th>---</th>
                    <th>---</th>
                  </tr>
                  <tr>
                    <th>VF7 SBLMZ0 EW454823 - Peugeot - 308 - bleue - options - ER-452-GT - microhybride</th>
                    <th>En déstockage</th>
                    <th>Arrivée prévue le 15/03/2026</th>
                    <th>---</th>
                    <th>---</th>
                  </tr>
              </tbody>
          </table>
          <h4>Client(s)</h4>
          <h5>Société ENM</h5>
          <h5>Contact(s)</h5>
          <ul>
            <li>Bertrand Lizier - 06 98 42 57 16 - bertrandlizier@enm.fr</li>
            <li>Patricia Moran - 07 98 45 47 16 - 04 52 41 63 52 - patriciamoran@enm.fr</li>
            <li>Gestion du parc - parc@enm.fr</li>
          </ul>
        </section>

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
