import os

def list_directory_contents(root_dir, ignore_dirs, ignore_files, max_file_size_mb=5):
    """
    Gibt rekursiv alle Verzeichnisse, Unterverzeichnisse und Dateien im angegebenen Stammverzeichnis aus
    und zeigt den vollständigen Inhalt jeder Datei an.

    Args:
        root_dir (str): Das Stammverzeichnis, von dem aus begonnen werden soll
        ignore_dirs (list): Liste der zu ignorierenden Verzeichnisnamen
        ignore_files (list): Liste der zu ignorierenden Dateinamen
        max_file_size_mb (int): Maximale Dateigröße zum Lesen in MB
    """
    # Überprüfen, ob das Stammverzeichnis existiert
    if not os.path.exists(root_dir):
        print(f"Fehler: Verzeichnis '{root_dir}' existiert nicht.")
        return

    # Binäre Dateierweiterungen, deren Inhalt nicht angezeigt werden soll
    binary_extensions = {
        '.exe', '.dll', '.so', '.dylib', '.bin', '.dat', '.db', '.sqlite', '.sqlite3',
        '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tif', '.tiff', '.ico', '.webp',
        '.mp3', '.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv', '.wav', '.ogg',
        '.zip', '.tar', '.gz', '.bz2', '.7z', '.rar', '.pdf', '.doc', '.docx',
        '.xls', '.xlsx', '.ppt', '.pptx'
    }

    # Kodierungen, die beim Lesen von Dateien versucht werden sollen
    encodings = ['utf-8', 'latin-1', 'cp1252', 'iso-8859-1']

    max_file_size = max_file_size_mb * 1024 * 1024  # MB in Bytes umrechnen

    # Durch die Verzeichnisstruktur laufen
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Ignorierte Verzeichnisse aus dirnames entfernen, um zu verhindern, dass os.walk sie durchläuft
        dirnames[:] = [d for d in dirnames if d not in ignore_dirs]

        # Aktuellen Verzeichnispfad ausgeben
        rel_path = os.path.relpath(dirpath, root_dir)
        if rel_path == '.':
            print(f"\n\n{'=' * 80}")
            print(f"VERZEICHNIS: {root_dir}")
            print(f"{'=' * 80}")
        else:
            print(f"\n\n{'=' * 80}")
            print(f"VERZEICHNIS: {os.path.join(root_dir, rel_path)}")
            print(f"{'=' * 80}")

        # Unterverzeichnisse ausgeben
        if dirnames:
            print("\nUnterverzeichnisse:")
            for dirname in dirnames:
                print(f"  - {dirname}")

        # Dateien und ihre Inhalte ausgeben
        if filenames:
            # Zu ignorierende Dateien herausfiltern
            filtered_filenames = [f for f in filenames if f not in ignore_files]

            print("\nDateien:")
            for filename in filtered_filenames:
                file_path = os.path.join(dirpath, filename)
                print(f"\n{'-' * 50}")
                print(f"DATEI: {file_path}")
                print(f"{'-' * 50}")

                try:
                    # Dateigröße überprüfen
                    file_size = os.path.getsize(file_path)
                    if file_size > max_file_size:
                        print(f"Datei ist zu groß, um den Inhalt anzuzeigen ({file_size / 1024 / 1024:.2f} MB).")
                        continue

                    # Überprüfen, ob es sich um eine Binärdatei anhand der Erweiterung handelt
                    file_ext = os.path.splitext(filename)[1].lower()
                    if file_ext and file_ext in binary_extensions:
                        print(f"Binärdatei erkannt ({file_ext}). Inhalt wird nicht angezeigt.")
                        continue

                    # Mehrere Kodierungen ausprobieren
                    content = None
                    for encoding in encodings:
                        try:
                            with open(file_path, 'r', encoding=encoding) as f:
                                content = f.read()
                            break
                        except UnicodeDecodeError:
                            continue

                    if content is not None:
                        print(content)
                    else:
                        print("Datei konnte mit keiner der versuchten Kodierungen gelesen werden.")

                except (PermissionError, IsADirectoryError) as e:
                    print(f"Dateiinhalt konnte nicht gelesen werden: {str(e)}")
                except Exception as e:
                    print(f"Unerwarteter Fehler beim Lesen der Datei: {str(e)}")

def main():
    root_dir = r"C:\Users\DamjanSavic\Documents\Techologie.Team"

    # Zu ignorierende Verzeichnisse
    ignore_dirs = [
        "__pycache__",
        ".idea",
        "node_modules",
        ".git",
        "External Libraries",
        "Scratches and Consoles"
    ]

    # Zu ignorierende Dateien
    ignore_files = [
        "package-lock.json"
    ]

    # Maximale Dateigröße für die Anzeige des Inhalts (in MB)
    max_file_size_mb = 5

    list_directory_contents(root_dir, ignore_dirs, ignore_files, max_file_size_mb)

if __name__ == "__main__":
    main()