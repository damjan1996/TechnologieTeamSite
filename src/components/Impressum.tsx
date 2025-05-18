import { useState, useEffect } from 'react';

export default function Impressum() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('impressum-section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        // Hinzugefügt: mt-20 sm:mt-28 für Abstand unter der Navbar
        <section id="impressum-section" className="py-12 sm:py-16 lg:py-24 bg-white mt-20 sm:mt-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h1 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
                        Impressum
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">A. Allgemeine Informationspflichten nach § 5 Digitale-Dienste-Gesetz (DDG)</h2>
                        <p className="mb-4">
                            <strong>Technologie Team JPU Beteiligungs GmbH</strong><br />
                            Sitz der Gesellschaft: Oberhausen<br />
                            Handelsregister: Amtsgericht Duisburg – HRB 37564
                        </p>

                        <p className="mb-4">
                            <strong>Anschrift:</strong><br />
                            Essener Str. 2-24, 46047 Oberhausen<br />
                            E-Mail: kontakt@technologie.team
                        </p>

                        <p className="mb-6">
                            <strong>Geschäftsführer:</strong> Peter Heim<br />
                            <strong>Presserechtlich Verantwortlich:</strong> Peter Heim
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Social-Media-Angebote</h3>
                        <p className="mb-6">
                            Die Angaben in diesem Impressum sind ebenfalls für folgende Social Media-Accounts verbindlich:<br />
                            LinkedIn
                        </p>

                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">B. Haftungsausschluss</h2>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Inhalt des Onlineangebotes</h3>
                        <p className="mb-4">
                            Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Verweise und Links</h3>
                        <p className="mb-4">
                            Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt daher ausdrücklich, dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren. Der Autor hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten/verknüpften Seiten.
                            Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Urheber- und Kennzeichenrecht</h3>
                        <p className="mb-4">
                            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.
                            Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluß zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind!
                            Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten.
                            Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Rechtswirksamkeit dieses Haftungsausschlusses</h3>
                        <p className="mb-6">
                            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Alternative Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und § 36 VSBG:</h3>
                        <p className="mb-6">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter https://ec.europa.eu/consumers/odr finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}