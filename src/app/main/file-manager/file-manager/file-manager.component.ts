import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  public folders = [
    {
      name: 'photos',
      files: 10,
      size: '2.2GB'
    },
    {
      name: 'draws',
      files: 2,
      size: '0.2GB'
    },
    {
      name: 'Schema docs',
      files: 15,
      size: '0.1GB'
    },
    {
      name: 'Cluster configs',
      files: 1,
      size: '1MB'
    }
  ]
  public files = [
    {
      name: 'SUPPORT.md',
      accessed: '5 mins ago',
      size: '2KB',
    },
    {
      name: 'repos_generated.bzl',
      accessed: '1 hour ago',
      size: '16KB',
    },
    {
      name: 'import-restrictions.yaml',
      accessed: '6 hours ago',
      size: '101KB',
    },
    {
      name: 'build-cross.sh',
      accessed: '10 days ago',
      size: '1MB',
    },
    {
      name: 'infrastructure.svg',
      accessed: '1 month ago',
      size: '178MB',
    },
    {
      name: 'packages.json',
      accessed: '4 months ago',
      size: '13KB',
    }
  ]
  public filesMore = [
    {
      name: 'README.md',
      accessed: '5 mins ago',
      size: '2.2GB',
    },
    {
      name: 'tools.go',
      accessed: '5 mins ago',
      size: '0.2GB',
    },
    {
      name: 'meetings.xls',
      accessed: '5 mins ago',
      size: '0.1GB',
    },
    {
      name: 'Schema-map.doc',
      accessed: '5 mins ago',
      size: '1MB',
    },
    {
      name: 'nice-girls-secret.jpg',
      accessed: '5 mins ago',
      size: '1MB',
    },
    {
      name: 'Webdesign.xlsx',
      accessed: '5 mins ago',
      size: '0.01MB',
    },
    {
      name: 'last-Design.psd',
      accessed: '5 mins ago',
      size: '0.01MB',
    },
    {
      name: 'build.yaml',
      accessed: '5 mins ago',
      size: '0.01MB',
    },
    {
      name: 'kubernetes-links.docs',
      accessed: '5 mins ago',
      size: '0.01MB',
    },

    {
      name: 'providers.go',
      accessed: '5 mins ago',
      size: '0.01MB',
    },
    {
      name: 'ngrx-store.ts',
      accessed: '5 mins ago',
      size: '0.01MB',
    },
    {
      name: 'more-docs.xlsx',
      accessed: '5 mins ago',
      size: '0.01MB',
    },
    {
      name: 'nice-girls-secret.jpg',
      accessed: '5 mins ago',
      size: '1MB',
    },
    {
      name: 'Webdesign.xlsx',
      accessed: '5 mins ago',
      size: '0.01MB',
    },
  ]
  public selectedItem = {
    name: 'import-restrictions.yaml',
    accessed: '5 mins ago',
    size: '0.1GB',
  }
  public isDetailsOpened: boolean = false
  public leftSidebarVisibility: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectItem(item) {
    this.isDetailsOpened = true
    this.selectedItem = item
  }

  onClose(event) {
    this.isDetailsOpened = false
  }

  onToggleLeftSidebar() {
    this.leftSidebarVisibility = !this.leftSidebarVisibility
  }
}
