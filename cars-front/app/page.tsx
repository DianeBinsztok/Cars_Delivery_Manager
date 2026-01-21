import Image from "next/image";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* I - PLANNING DU JOUR */}
        <section>
            <h2>Livraisons du jour</h2>
            <table>
                <thead>
                    <tr>
                        <th>Heure</th>
                        <th>Client</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>9:00</th>
                        <th>ENM</th>
                        <th>Livraison de 1 Peugeot 2008</th>
                    </tr>
                    <tr>
                        <th>11:00</th>
                        <th>Régie de l'Eau</th>
                        <th>Livraison de 5 Peugeot 208</th>
                    </tr>
                </tbody>
            </table>
        </section>
        {/* II - VEHICULES */}
        <section>
          <h2>Commandes</h2>
            {/* VÉHICULES LIVRABLES */}
            <section id="ongoing"> 
                <section>
                    
            
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={6}><h3>Commandes en cours</h3></th>
                            </tr>
                        </thead>
                        <thead>
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
                              <td>46</td>
                              <td>Livraison programmée</td>
                              <td>03/02/2026</td>
                              <td>---</td>
                              <td>ARS Aquitaine</td>
                              <td>1 Peugeot 2008</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>Livraison programmée</td>
                              <td>03/02/2026</td>
                              <td>---</td>
                              <td>Domofrance</td>
                              <td>3 Peugeot 308</td>
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
                              <td>79</td>
                              <td>Livraison programmée</td>
                              <td>15/02/2026</td>
                              <td>---</td>
                              <td>Domofrance</td>
                              <td>2 Peugeot 3008</td>
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
                              <td>456</td>
                              <td>Déstockage en cours</td>
                              <td>Arrivée prévue le 03/03/2026</td>
                              <td>---</td>
                              <td>ENM</td>
                              <td>5 Peugeot 208</td>
                              <td><input type="checkbox" /></td>
                            </tr>
                            <tr>
                              <td>18</td>
                              <td>Déstockage en cours</td>
                              <td>Arrivée prévue le 25/03/2026</td>
                              <td>---</td>
                              <td>ARS Aquitaine</td>
                              <td>1 Peugeot 408</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>43</td>
                              <td>Déstockage en cours</td>
                              <td>Arrivée prévue le 25/03/2026</td>
                              <td>---</td>
                              <td>Domofrance</td>
                              <td>3 Citroen C4</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>34</td>
                              <td>Déstockage en cours</td>
                              <td>Arrivée prévue le 18/04/2026</td>
                              <td>---</td>
                              <td>ENM</td>
                              <td>5 Peugeot 2008</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>91</td>
                              <td>Déstockage en attente</td>
                              <td>À déstocker le 18/04/2026</td>
                              <td>---</td>
                              <td>ENM</td>
                              <td>5 Peugeot 2008</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>12</td>
                              <td>Déstockage en attente</td>
                              <td>---</td>
                              <td>Déstocker dès réception de la carte grise</td>
                              <td>ENM</td>
                              <td>5 Peugeot 2008</td>
                              <td><input type="checkbox" /></td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>48</td>
                              <td>Déstockage en attente</td>
                              <td>---</td>
                              <td>Déstocker quand accord du client</td>
                              <td>ENM</td>
                              <td>5 Peugeot 2008</td>
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
            <section id="standby">        
                <h2>Commandes en attente</h2>
                <section>
                    <table>
                        <thead>
                            <tr>
                              <th colSpan={6}><h3>Rappels constructeurs</h3></th>
                            </tr>
                        </thead>
                        <thead>
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
                              <td>5 Peugeot 208</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>13</td>
                              <td>2022-CD34</td>
                              <td>En atelier</td>
                              <td>ARS Aquitaine</td>
                              <td>1 Peugeot 2008</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>51</td>
                              <td>2023-EF56</td>
                              <td>En atelier</td>
                              <td>Domofrance</td>
                              <td>3 Peugeot 308</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>61</td>
                              <td>2023-GH78</td>
                              <td>Dossier demandé</td>
                              <td>ENM</td>
                              <td>3 Peugeot 3008</td>
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
                              <td>2 Peugeot 3008</td>
                              <td>---</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <table>
                        <thead>
                            <tr>
                              <th colSpan={6}><h3>Réserves carrosseries</h3></th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                              <th>n° Cmde</th>
                              <th>Statut</th>
                              <th>Client</th>
                              <th>Véhicule(s)</th>
                              <th>Dernière action, note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>16</td>
                              <td>En atelier</td>
                              <td>ENM</td>
                              <td>5 Peugeot 208</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>En atelier</td>
                              <td>ARS Aquitaine</td>
                              <td>1 Peugeot 2008</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>27</td>
                              <td>En atelier</td>
                              <td>Domofrance</td>
                              <td>3 Peugeot 308</td>
                              <td>---</td>
                            </tr>
                            <tr>
                              <td>38</td>
                              <td>Dossier demandé</td>
                              <td>ENM</td>
                              <td>3 Peugeot 3008</td>
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
                              <td>2 Peugeot 3008</td>
                              <td>---</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
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
