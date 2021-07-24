import { Component, OnInit,  HostListener } from '@angular/core';
import { POPOUT_MODALS, PopoutModalName } from 'app/services/popout.tokens';
import { PopoutService } from 'app/services/popout.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  customerDetails: any = {};

  constructor(private popoutService: PopoutService) {
    this.customerDetails = {
      'Jessica': {
        id: '1111',
        age: 35,
        employer: 'ABCD Bank'
      },
      'Mark': {
        id: '2222',
        age: 45,
        employer: 'XY Holdings'
      },
      'Gerard': {
        id: '2223',
        age: 45,
        employer: 'XY Holdings'
      },
    };
  }

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload', ['$event'])
  onWindowClose(event: Event) {
    this.popoutService.closePopoutModal();
  }

  openCustomerPopout(name: string) {
    const modalData = {
      modalName: PopoutModalName.customerDetail,
      name: name,
      id: this.customerDetails[name].id,
      age: this.customerDetails[name].age,
      employer: this.customerDetails[name].employer
    };

    // const customerPopoutDetails = POPOUT_MODALS[PopoutModalName.customerDetail];

    if (!this.popoutService.isPopoutWindowOpen()) {
      this.popoutService.openPopoutModal(modalData);
    } else {
      const sameCustomer = POPOUT_MODALS['componentInstance'].name === name;
      // When popout modal is open and there is no change in data, focus on popout modal
      if (sameCustomer) {
        this.popoutService.focusPopoutWindow();
      } else {
        POPOUT_MODALS['outlet'].detach();
        const injector = this.popoutService.createInjector(modalData);
        const componentInstance = this.popoutService.attachCustomerContainer(POPOUT_MODALS['outlet'], injector);
        POPOUT_MODALS['componentInstance'] = componentInstance;
        this.popoutService.focusPopoutWindow();
      }
    }
  }

}
