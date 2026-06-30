package com.eazybytes.eazystore.controller;

import com.eazybytes.eazystore.dto.ContactRequestDto;
import com.eazybytes.eazystore.entity.Contact;
import com.eazybytes.eazystore.service.IContactService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@AllArgsConstructor
@RestController
@RequestMapping("api/v1/contacts")
public class ContactController {

    private final IContactService iContactService;

    public ContactController(IContactService iContactService) {
        this.iContactService = iContactService;
    }

    @PostMapping
    public ResponseEntity<String> saveContact(@Valid @RequestBody ContactRequestDto contactRequestDto) {
        boolean isSaved = iContactService.saveContact(contactRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Request Processed Successfully.");

    }
}
