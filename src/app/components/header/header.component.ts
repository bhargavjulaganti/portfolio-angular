import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { menuOpenCloseAnimation, menuOpenCloseHeightAnimation } from '../../../animations/bruger-menu.animation';
import { RoutesData } from '../../../enums/routes-data.enum';
import { AppConfig } from '../../../enums/app-data';
import { HttpClient } from '@angular/common/http';
import { AssetPaths } from '../../../enums/asset-paths.enum';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule,
    ],
    animations: [
        menuOpenCloseAnimation,
        menuOpenCloseHeightAnimation,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public navbarOpen = false;
    public linksData = RoutesData;
    public appData = AppConfig;

    constructor(
        private readonly _router: Router,
        private readonly _httpClient: HttpClient,
    ) {
        _router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.navbarOpen && this.toggleNavbar();
            }
        });
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        if (window.innerWidth > 1024) {
            this.navbarOpen = false;
        }
    }

    public resumeDownload(): void {
        const absolutePath = this.constructAbsolutePath(AssetPaths.RESUME_IT);
        this._httpClient.get(absolutePath, { responseType: 'blob' }).subscribe({
            next: (blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = this.getFileNameFromPath(AssetPaths.RESUME_IT); // Extract the file name
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("Document downloaded successfully.");
            },
            error: (err) => {
                console.error("Error downloading the document: ", err);
            },
        });
    
    }

    private constructAbsolutePath(relativePath: string): string {
        return `${window.location.origin}/${relativePath}`;
    }

    private getFileNameFromPath(path: string): string {
        return path.split('/').pop() || 'downloaded_file';
    }

}
