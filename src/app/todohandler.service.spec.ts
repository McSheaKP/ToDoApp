import { TestBed, inject } from '@angular/core/testing';

import { TodohandlerService } from './todohandler.service';

describe('TodohandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodohandlerService]
    });
  });

  it('should be created', inject([TodohandlerService], (service: TodohandlerService) => {
    expect(service).toBeTruthy();
  }));
});
