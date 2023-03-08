package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;
@Service
public class PatientService {
	@Autowired
	PatientRepository repository;
	public String addPatient(Patient patient) 
	{
		repository.save(patient);
		return "Patient is Added";
	}
	public List<Patient> getPatient()
	{
		return repository.findAll();
	}
	
	public String updatePatient(Patient patient)
	{
		repository.save(patient);
		return " Patient is Updated ";
	}
	public String deletePatientById(int id) {
	    repository.deleteById(id);
	    return "Patient Removed";
	}
	public List<Patient> getPatientSorted(String field)
	{
		return repository.findAll(Sort.by(Sort.Direction.ASC, field));
	}
	public List<Patient> getPatientWithPagination(@PathVariable int offset, @PathVariable int pageSize)
	{
		Page<Patient> page=repository.findAll(PageRequest.of(offset,pageSize));
		return page.getContent();
	}
	public List<Patient> getPatientWithSortingAndPagination(int offset,int pageSize,String field)
	{
		Pageable paging = PageRequest.of(offset,pageSize,Sort.by(field));
		Page<Patient> page=repository.findAll(paging);
		return page.getContent();
	}

}